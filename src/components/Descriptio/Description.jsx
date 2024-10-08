import stylesDescription from "./Description.module.css";

const Description = () => {
  return (
    <>
      <h1 className={stylesDescription.header}>Sip Happens Café</h1>
      <p className={stylesDescription.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};
export default Description;
