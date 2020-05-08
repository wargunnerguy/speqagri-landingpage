function checkForm(form) // Submit button clicked
{
    //
    // check form input values
    //

    form.submit.disabled = true;
    form.submit.value = '...';
    return true;
}