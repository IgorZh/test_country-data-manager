import { useEffect } from "react";

const MESSAGE_TIMEOUT = 1000;

export default function TimerMessage({ children, onTimeout }) {
    const childrenDefined = !!children;

    useEffect(() => {
        if (!childrenDefined) {
            return;
        }

        const timeout = setTimeout(onTimeout, MESSAGE_TIMEOUT);

        return () => window.clearTimeout(timeout);
    });

    if (!childrenDefined) {
        return null;
    }

    return <div>{children}</div>;
}
