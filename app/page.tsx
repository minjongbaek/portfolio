import { BioLinks } from "./components/BioLinks";
import { Section } from "./components/Section";
import { ExperienceCard } from "./components/ExperienceCard";
import { EducationCard } from "./components/EducationCard";
import { CertificationCard } from "./components/CertificationCard";

const BIO = [
  {
    label: "Email",
    href: "mailto:minjongbaek@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/minjongbaek",
  },
  {
    label: "Blog",
    href: "https://blog.minjong.dev",
  },
];

const WORK_EXPERIENCE = [
  {
    id: "knowck",
    title: "노크",
    position: "풀스택 개발자",
    startDate: "2019.12",
    endDate: "2022.07",
  },
  {
    id: "futurewiz",
    title: "퓨쳐위즈",
    position: "프론트엔드 개발자",
    startDate: "2023.08",
  },
];

const SIDE_PROJECTS = [
  {
    id: "blog",
    title: "Blog.minjong",
    startDate: "2023.01",
  },
  {
    id: "dadok",
    title: "다독다독",
    startDate: "2023.02",
    endDate: "2023.05",
  },
  {
    id: "shawkee",
    title: "Shawkee OS",
    startDate: "2023.12",
    endDate: "2024.06",
  },
];

const EDUCATION = [
  {
    id: 0,
    title: "동양미래대학교",
    major: "정보통신공학과",
    degree: "전문학사",
    status: "졸업",
    startDate: "2014.03",
    endDate: "2019.02",
  },
  {
    id: 1,
    title: "동양미래대학교",
    major: "정보통신공학과 (전공심화)",
    degree: "학사",
    status: "졸업",
    startDate: "2019.03",
    endDate: "2020.02",
  },
  {
    id: 2,
    title: "프로그래머스 프론트엔드 데브코스 3기",
    status: "수료",
    startDate: "2022.10",
    endDate: "2023.03",
  },
];

const Certifications = [
  {
    id: 0,
    title: "정보처리기사",
    date: "2019.11",
    issuer: "한국산업인력공단",
  },
];

const Resume = async () => {
  const { default: IntroduceContent } = await import(`@/content/introduce.mdx`);

  const workExperienceWithContent = (
    await Promise.all(
      [...WORK_EXPERIENCE].map(async (experience) => {
        const { default: WorkExperienceContent } = await import(
          `@/content/experience/${experience.id}.mdx`
        );
        return { ...experience, WorkExperienceContent };
      }),
    )
  ).reverse();

  const sideProjectsWithContent = (
    await Promise.all(
      [...SIDE_PROJECTS].map(async (sideProject) => {
        const { default: SideProjectContent } = await import(
          `@/content/project/${sideProject.id}.mdx`
        );
        return { ...sideProject, SideProjectContent };
      }),
    )
  ).reverse();

  const educations = [...EDUCATION].reverse();
  const certifications = [...Certifications].reverse();

  return (
    <div className="my-12 flex flex-col gap-20 p-4">
      <div className="flex flex-col gap-8">
        <h1 className="leading-14">
          안녕하세요,
          <br />
          프론트엔드 개발자 <span className="text-blue-500">백민종</span>입니다.
        </h1>
        <BioLinks links={BIO} />
        <div>
          <IntroduceContent />
        </div>
      </div>

      <Section title="경력">
        <div className="flex flex-col gap-12">
          {workExperienceWithContent.map(
            ({
              id,
              title,
              position,
              startDate,
              endDate,
              WorkExperienceContent,
            }) => (
              <ExperienceCard
                key={id}
                title={title}
                position={position}
                startDate={startDate}
                endDate={endDate}
                imagePath={`/experience/${id}/logo.png`}
              >
                <WorkExperienceContent />
              </ExperienceCard>
            ),
          )}
        </div>
      </Section>

      <Section title="프로젝트">
        <div className="flex flex-col gap-12">
          {sideProjectsWithContent.map(
            ({ id, title, startDate, endDate, SideProjectContent }) => (
              <ExperienceCard
                key={id}
                title={title}
                startDate={startDate}
                endDate={endDate}
                imagePath={`/project/${id}.png`}
              >
                <SideProjectContent />
              </ExperienceCard>
            ),
          )}
        </div>
      </Section>

      <Section title="교육">
        <div className="flex flex-col gap-12">
          {educations.map(
            ({ id, title, major, degree, status, startDate, endDate }) => (
              <EducationCard
                key={id}
                title={title}
                major={major}
                degree={degree}
                status={status}
                startDate={startDate}
                endDate={endDate}
              />
            ),
          )}
        </div>
      </Section>

      <Section title="자격증">
        <div className="flex flex-col gap-12">
          {certifications.map(({ id, title, date, issuer }) => (
            <CertificationCard
              key={id}
              title={title}
              date={date}
              issuer={issuer}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Resume;
