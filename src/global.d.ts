/// <reference types="@react-three/fiber" />

export { };

declare global {
    interface Window {
        setAvatarSection?: (
            section: "hero" | "about" | "skills" | "projects" | "contact"
        ) => void;
    }
}
