import { COMPANY_NAME } from "../_constants/names";
import DocExchangeLogo from "./icons/doexchange-logo";

export default function DocExchangeTitle() {
    return (
        <div className="flex flex-row gap-2 items-center text-lg text-slate-800">
            <DocExchangeLogo />
            <p>{COMPANY_NAME}</p>
        </div>
    );
}
