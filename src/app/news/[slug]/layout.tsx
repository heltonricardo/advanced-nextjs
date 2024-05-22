interface Props {
  readonly modal: React.ReactNode;
  readonly children: React.ReactNode;
}

export default function NewsDetailLayout({ modal, children }: Props) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
