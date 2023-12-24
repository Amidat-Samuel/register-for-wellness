function showPass() {
    let pass_field = document.getElementById("password")

    if (pass_field.type === "password") {
        pass_field.type = "text"
        return
    }

    pass_field.type = "password";
}