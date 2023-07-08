export default function IntroCard({
  header,
  children,
}: {
  header: string;
  children: React.ReactElement;
}) {
  return (
    <div className="flex flex-col md:max-w-[364px]">
      <h1 className="text-xl md:px-2">{header}</h1>
      <hr className="md: my-2 hidden md:block" />
      <div className="pt-1 md:px-2 md:pt-0">{children}</div>
    </div>
  );
}
