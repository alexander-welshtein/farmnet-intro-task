export default class AnimationMagic {
    public static restartAnimation(element: HTMLElement, className: string) {
        element.classList.remove(className)
        void element.offsetWidth
        element.classList.add(className)
    }
}