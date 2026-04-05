export default function Section({ title, children }) {
    return (
        <div className="mb-6">
            {title && (
                <h2 className="text-lg font-semibold mb-3">{title}</h2>
            )}
            {children}
        </div>
    );
}