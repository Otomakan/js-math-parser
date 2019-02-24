
export default (ch)=>{
	if (/[0-9]/i.test(ch))
		return "num"
	if ("+-^*/%&|<>!".indexOf(ch) >= 0)
		return "op"
	if (ch === "=")
		return "eq"
	if (" \t\n".indexOf(ch) >= 0)
		return "white"
	if (/([a-z])|([A-Z])/i.test(ch))
		return "char"
	else
		return "none type"

}