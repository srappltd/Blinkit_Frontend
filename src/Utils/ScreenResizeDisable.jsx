export const ScreenResizeDisable = () => {
    window.addEventListener("keydown", event => {
        eventDesableLaptop(event)
    })
    const eventDesableLaptop = (event) => {
        if (event.ctrlKey === true && (event.key === '+' || event.key === '-' || event.key === '=' || event.key === '0')) {
            event.preventDefault();
        }
    }

    // Disable pinch-to-zoom on mobile devices
    const handleTouchMove = (event) => {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    return () => {
        window.removeEventListener("keydown", eventDesableLaptop)
        window.removeEventListener("touchmove", handleTouchMove)
    }
}