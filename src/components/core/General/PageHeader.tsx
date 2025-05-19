type PageHeaderProps = {
  header: string;
  description: string;
};

const PageHeader = ({ header, description }: PageHeaderProps) => {
  return (
    <header className="mb-14 text-left">
      <h1 className="text-4xl md:text-5xl font-headline text-headline mb-3 leading-tight">
        {header}
      </h1>
      <p className="max-w-xl mx-auto md:mx-0 text-lg font-body text-body leading-relaxed">
        {description}
      </p>
    </header>
  );
};

export default PageHeader;
