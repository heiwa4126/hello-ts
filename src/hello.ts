function hello(name = ""): string {
	return name === "" ? "Hello!" : `Hello ${name}!`;
}

export { hello };
