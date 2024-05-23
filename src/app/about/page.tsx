interface AboutProps {
  data: any;
}
export default function About(props: AboutProps) {
  return (
    <div>
      <p>About page</p>
      <div> {props.data}</div>
    </div>
  );
}
