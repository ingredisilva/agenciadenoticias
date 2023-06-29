// eslint-disable-next-line unused-imports/no-unused-vars
declare module '*.png' {
  const value: string | StaticImport;
  export = value;
}

interface DOMAttributes<T> {
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}
