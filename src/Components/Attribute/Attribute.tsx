export const Attribute = () => {
  return (
    <footer>
      <p className="text-[11px] text-center">
        Challenge by
        <a
          className={`${styles.textColor}`}
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className={`${styles.textColor}`} href="#">
          Carlos A. Palacios R.
        </a>
        .
      </p>
    </footer>
  );
};

const styles = {
  textColor: "text-[hsl(228, 45%, 44%)]",
};
