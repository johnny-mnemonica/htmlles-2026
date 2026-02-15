<?php
/**
 * Template Name: about-us
 */

$context = Timber::context();
$timber_post     = Timber::get_post();
$context['post'] = $timber_post;
Timber::render( 'template-about-us.twig', $context );
