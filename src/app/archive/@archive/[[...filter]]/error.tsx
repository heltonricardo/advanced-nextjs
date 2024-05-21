"use client";

interface Props {
  error: Error;
}

export default function FilterError({ error }: Props) {
  return (
    <div id="error">
      <h2>An error ocurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
