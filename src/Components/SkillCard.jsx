function SkillCard({ Icon, label, color, subLabel }) {
  const wrapperStyle = { ['--icon-hover-color']: color };
  const IconComponent = Icon;

  return (
    <div
      className="group flex flex-col items-center justify-center w-24 h-24 p-2 border border-white rounded-lg dark:border-gray-900 transition duration-300 ease-in-out hover:shadow-xl hover:scale-110"
      style={wrapperStyle}
    >
      <IconComponent className="w-full h-auto text-white dark:text-gray-900 transition-colors duration-300 group-hover:text-[var(--icon-hover-color)]" />

      <span className="mt-3 text-sm font-medium">{label}</span>
      {subLabel && <span className="mt-1 text-sm font-medium">{subLabel}</span>}
    </div>
  );
}

export default SkillCard;
