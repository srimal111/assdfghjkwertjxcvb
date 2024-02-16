$(document).ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission
        var userId = $('#userId').val();
        var password = $('#password').val();
        var selectedSystem = $('#systemSelect').val();

        // Check credentials and selected system
        if (userId === "1" && password === "12" && selectedSystem === "SYSTEM C") {
            window.location.href = "systemc.html"; // Redirect to systemc.html
        } else {
            var alertPlaceholder = $('#alertPlaceholder');
            var alertMessage = $('<div class="alert alert-danger" role="alert">Invalid credentials or system selection.</div>');
            alertPlaceholder.html(alertMessage);
            
            // Clear input fields
            $('#userId').val('');
            $('#password').val('');
        }
    });
});
