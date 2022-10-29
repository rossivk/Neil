<section id="contact" class="section-content section-background-primary section-contact theme-light">
    <h1 class="section-title-primary">Contact</h1>

    <form id="section-contact-form" class="section-contact-form">
        <label for="name">Name*</label>
        <input type="text" name="name" id="name">
        <p class="section-contact-form-error">Please enter a valid name!</p>

        <label for="email">E-mail*</label>
        <input type="email" name="email" id="email">
        <p class="section-contact-form-error">Please enter a valid email!</p>

        <label for="message">Message*</label>
        <textarea name="message" id="message" cols="30" rows="5"></textarea>
        <p class="section-contact-form-error">Please enter a message!</p>

        <button type="submit">Send</button>
        <p id="form-submit-success" class="section-contact-form-success">Form successfully sent!</p>
        <p id="form-submit-error" class="section-contact-form-error">An error occured, please try again later or use the other contact methods!</p>
    </form>

    <?php include "./pages/partials/socials.html" ?>
</section>
