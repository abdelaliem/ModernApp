import styles, { layout } from "../style";


function Card({specialLayout,h2,p,children,lastSection,id}) {
  return (
    <section id={id} className={`${specialLayout}  mt-[35px]`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2} `}>
          {h2}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         {p}
        </p>
        {lastSection}
      </div>
      {children}
    </section>
  );
}

export default Card;
