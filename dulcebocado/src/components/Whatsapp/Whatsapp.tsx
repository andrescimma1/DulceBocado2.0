import "./Whatsapp.scss";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noreferrer"
      className="container"
    >
      <img width={70} src="/assets/icons/whatsapp.svg" alt="WhatsApp" />
    </a>
  );
};

export default Whatsapp;
