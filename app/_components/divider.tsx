export default function Divider({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-full border-t border-slate-300" />
            <span className="text-slate-500">{text}</span>
            <div className="w-full border-t border-slate-300" />
        </div>
    );
}
