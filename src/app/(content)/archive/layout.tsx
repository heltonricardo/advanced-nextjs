import React from "react";

interface Props {
  readonly archive: React.ReactNode;
  readonly latest: React.ReactNode;
}

export default function ArchiveLayout(props: Props) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{props.archive}</section>
      <section id="archive-latest">{props.latest}</section>
    </div>
  );
}
