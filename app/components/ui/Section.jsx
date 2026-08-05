import Container from "./Container";

export default function Section({
  children,
  className = "",
  background = "bg-white",
}) {
  return (
    <section className={`${background} py-24 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}