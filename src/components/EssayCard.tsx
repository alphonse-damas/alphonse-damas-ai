type EssayCardProps = {
  category: string;
  title: string;
  description: string;
  link: string;
};

export default function EssayCard({
  category,
  title,
  description,
  link,
}: EssayCardProps) {
  return (
    <a
      href={link}
      className="block border border-gray-800 bg-[#111827] rounded-2xl p-8 hover:border-blue-500 transition"
    >
      <p className="text-blue-400 uppercase tracking-widest text-sm mb-4">
        {category}
      </p>

      <h2 className="text-3xl font-bold mb-4">{title}</h2>

      <p className="text-gray-400 text-lg leading-relaxed mb-6">
        {description}
      </p>

      <div className="text-blue-400 font-semibold">Read Essay →</div>
    </a>
  );
}