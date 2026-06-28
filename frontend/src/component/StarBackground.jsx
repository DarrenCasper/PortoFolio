export const StarBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Subtle dot grid */}
            <div className="absolute inset-0 dot-grid opacity-50" />

            {/* Slow aurora blobs — no JS, pure CSS */}
            <div className="aurora-blob aurora-1" />
            <div className="aurora-blob aurora-2" />
            <div className="aurora-blob aurora-3" />
        </div>
    );
};
