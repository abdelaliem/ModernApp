import styles from "../style"

function FeatureCard({id,icon,title,content}) {
    return (
        <div className="flex flex-row p-6 rounded-[20px]  feature-card">
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain "  />
            </div>
            <div className="flex-1 flex flex-col ml-3">
                <h4 className=" font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                    {title}
                </h4>
                <p className=" font-poppins font-semibold text-white text-[16px] leading-[24px] mb-1">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default FeatureCard
