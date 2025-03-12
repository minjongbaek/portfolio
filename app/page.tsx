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
    id: "dadok",
    title: "다독다독",
    startDate: "2023.02",
    endDate: "2023.05",
  },
  {
    id: "blog",
    title: "Blog.minjong",
    startDate: "2023.01",
  },
  {
    id: "shawkee",
    title: "Shawkee OS",
    startDate: "2023.12",
    endDate: "2024.06",
  },
];

const Resume = async () => {
  const { default: IntroduceContent } = await import(`@/content/introduce.mdx`);

  const workExperienceWithContent = (
    await Promise.all(
      [...WORK_EXPERIENCE].map(async (experience) => {
        const { default: WorkExperienceContent } = await import(`@/content/experience/${experience.id}.mdx`);
        return { ...experience, WorkExperienceContent };
      })
    )
  ).reverse();

  const sideProjectsWithContent = (
    await Promise.all(
      [...SIDE_PROJECTS].map(async (sideProject) => {
        const { default: SideProjectContent } = await import(`@/content/project/${sideProject.id}.mdx`);
        return { ...sideProject, SideProjectContent };
      })
    )
  ).reverse();

  return (
    <div className="flex flex-col gap-20 mt-12 p-4">
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
      <div>
        <h2>경력</h2>
        <hr className="border-gray-300 mt-4 mb-8" />
        <div className="flex flex-col gap-12">
          {workExperienceWithContent.map(({ id, title, position, startDate, endDate, WorkExperienceContent }) => (
            <div className="flex" key={id}>
              <div className="flex flex-col gap-2 w-42 mr-6 shrink-0">
                <div className="border border-gray-200/80 rounded-xl w-20 p-1">
                  <Image src={`/experience/${id}.png`} alt="title" width={80} height={80} />
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
              <div className="border-l pl-6 border-gray-200/80 grow markdown">
                <WorkExperienceContent />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>프로젝트</h2>
        <hr className="border-gray-300 mt-4 mb-8" />
        <div className="flex flex-col gap-12">
          {sideProjectsWithContent.map(({ id, title, startDate, endDate, SideProjectContent }) => (
            <div className="flex" key={id}>
              <div className="flex flex-col gap-2 w-42 mr-6 shrink-0">
                <div className="border border-gray-200/80 rounded-xl w-20 p-1">
                  <Image src={`/project/${id}.png`} alt="title" width={80} height={80} />
                </div>
                <h3>{title}</h3>
                <div className="flex flex-col">
                  <span>
                    {startDate} - {endDate ?? "진행중"}
                  </span>
                  {endDate && <span>({getDuration(startDate, endDate)})</span>}
                </div>
              </div>
              <div className="border-l pl-6 border-gray-200/80 grow markdown">
                <SideProjectContent />
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
