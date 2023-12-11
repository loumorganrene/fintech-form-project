interface BtnNavParam {
    changePage: (() => void) | ((e: React.FormEvent<HTMLButtonElement>) => void)
    action: string | boolean
}
