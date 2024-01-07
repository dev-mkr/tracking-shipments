interface SvgIconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  prefix?: string;
  alt?: string;
}

export default function SvgIcon({
  name,
  prefix = "icon",
  alt,
  ...props
}: SvgIconProps) {
  const symbolId = `#${prefix}-${name}`;

  return (
    <>
      {alt && <span className="sr-only">{alt}</span>}
      <svg {...props} aria-hidden="true">
        <use href={symbolId} />
      </svg>
    </>
  );
}
