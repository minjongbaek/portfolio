import Image from "next/image";

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
        <div className="flex gap-4">
          {BIO.map(({ label, href }) => (
            <a key={label} href={href} target="_blank">
              {label}
            </a>
          ))}
        </div>
        <div>
          <IntroduceContent />
        </div>
      </div>
      <div className="break-after-page">
        <h2>경력</h2>
        <hr className="mt-4 mb-8 border-gray-300" />
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
              <div
                className="flex break-after-page flex-col sm:flex-row"
                key={id}
              >
                <div className="flex w-42 shrink-0 flex-col gap-2 sm:mr-6">
                  <div className="w-20 rounded-xl border border-gray-200/80 p-1">
                    <Image
                      src={`/experience/${id}/logo.png`}
                      alt="title"
                      width={80}
                      height={80}
                    />
                  </div>
                  <h3>{title}</h3>
                  <div className="flex flex-col">
                    <span>{position}</span>
                    <span>
                      {startDate} - {endDate ?? "재직중"}
                    </span>
                    <span>({getDuration(startDate, endDate)})</span>
                  </div>
                </div>
                <div className="markdown grow border-gray-200/80 sm:border-l sm:pl-6">
                  <WorkExperienceContent />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
      <div>
        <h2>프로젝트</h2>
        <hr className="mt-4 mb-8 border-gray-300" />
        <div className="flex flex-col gap-12">
          {sideProjectsWithContent.map(
            ({ id, title, startDate, endDate, SideProjectContent }) => (
              <div className="flex flex-col sm:flex-row" key={id}>
                <div className="flex w-42 shrink-0 flex-col gap-2 sm:mr-6">
                  <div className="w-20 rounded-xl border border-gray-200/80 p-1">
                    <Image
                      src={`/project/${id}.png`}
                      alt="title"
                      width={80}
                      height={80}
                    />
                  </div>
                  <h3>{title}</h3>
                  <div className="flex flex-col">
                    {startDate && (
                      <span>
                        {startDate} - {endDate ?? "진행중"}
                      </span>
                    )}
                    {endDate && (
                      <span>({getDuration(startDate, endDate)})</span>
                    )}
                  </div>
                </div>
                <div className="markdown grow border-gray-200/80 sm:border-l sm:pl-6">
                  <SideProjectContent />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
      <div>
        <h2>교육</h2>
        <hr className="mt-4 mb-8 border-gray-300" />
        <div className="flex flex-col gap-12">
          {educations.map(
            ({ id, title, major, degree, status, startDate, endDate }) => (
              <div key={id} className="mr-6 flex flex-col gap-2">
                <h3>{title}</h3>
                <div className="flex flex-col">
                  {major && degree && (
                    <span>
                      {major} | {degree}
                    </span>
                  )}
                  <span>
                    {startDate} - {endDate} {endDate && <span>({status})</span>}
                  </span>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
      <div>
        <h2>자격증</h2>
        <hr className="mt-4 mb-8 border-gray-300" />
        <div className="flex flex-col gap-12">
          {certifications.map(({ id, title, issuer, date }) => (
            <div key={id} className="mr-6 flex flex-col gap-2">
              <h3>{title}</h3>
              <div className="flex flex-col">
                <span>{issuer}</span>
                <span>{date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;

const getDuration = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years === 0) {
    return `${months}개월`;
  }

  return `${years}년 ${months}개월`;
};
