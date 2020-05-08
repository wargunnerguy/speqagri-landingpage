function checkForm(form) // Submit button clicked
{
    //
    // check form input values
    //

    form.submit_btn.disabled = true;
    form.submit_btn.value = '...';
    return true;
}