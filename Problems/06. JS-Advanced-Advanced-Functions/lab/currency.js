function createFormatter(a1, a2, a3, a4) {
    return (value) => a4(a1, a2, a3, value)
}