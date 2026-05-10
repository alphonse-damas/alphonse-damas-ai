type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  status: string;
};

export default function ProjectCard({
  title,
  description,
  link,
  status,
}: ProjectCardProps) {
  const isComingSoon = link === "#";

  return (
    <div className="border border-gray-800 rounded-2xl p-8 bg-[#111827]">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>

      <p className="text-gray-300 leading-relaxed">{description}</p>

      {isComingSoon ? (
        <div className="inline-block mt-6 text-gray-500 font-semibold">
          {status}
        </div>
      ) : (
        <a
          href={link}
          className="inline-block mt-6 text-blue-400 font-semibold hover:text-blue-300"
        >
          {status}
        </a>
      )}
    </div>
  );
}