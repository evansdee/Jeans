
export default function Button({popBtn, children, onClick }) {
    return <button className={popBtn} onClick={onClick}>{children}</button>;
  }