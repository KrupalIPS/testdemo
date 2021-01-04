<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Favicon -->
    <link rel="shortcut icon" href="@asset('images/favicon.png')" type="image/x-icon">
    <!-- Google Fonts-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet">
    <!-- FontAwesome -->
    <script src="https://kit.fontawesome.com/eca99487a4.js" crossorigin="anonymous"></script>
    <script> window.FontAwesomeConfig = { searchPseudoElements: true } </script>
    <!-- .class:before{ display: none; content: "\f16c"; font-family: "Font Awesome 5 Pro"; } -->

    <?php 
      // Theme Options -> SEO Head Scripts
      echo (get_field('seo_head')) ?: get_field('seo_head', 'options');
    ?>
    <?php wp_head(); ?>
  </head>

  <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <?php do_action('get_header'); ?>
    <?php 
      // Theme Options -> SEO Google Scripts
      echo (get_field('seo_google')) ?: get_field('seo_google', 'options');
    ?>

    <div id="app">
      <?php echo \Roots\view(\Roots\app('sage.view'), \Roots\app('sage.data'))->render(); ?>
    </div>

    <?php 
      // Theme Options -> SEO Footer Scripts
      echo (get_field('seo_google')) ?: get_field('seo_google', 'options');
    ?>
    <?php do_action('get_footer'); ?>
    <?php wp_footer(); ?>
  </body>
</html>
