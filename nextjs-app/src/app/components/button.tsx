export default function Btn(props:any) {
    
    return (
        <div className="inline-flex">
            <a className="cust-btn px-[30px] py-[13px] border rounded-[6px] border-[#91ff03] text-[#91ff03] hover:text-[#fff] hover:border-[#fff] transition ease-in-out delay-100">{props.text}</a>
        </div>
    );
}