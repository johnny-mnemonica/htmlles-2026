<?php

// Setup Timber Context & Add merge query vars
// @todo: Maybe use pre_get_posts instead
$context = Timber\Timber::context();
$context['is_front_page'] = 'true';

// get post
$timber_post = Timber::get_post();
$context['text-1'] = $timber_post->meta('text-1');
$context['text-2'] = $timber_post->meta('text-2');

// List Templates
$templates = ['front-page.twig', 'page.twig', 'index.twig'];

// Render Tempalte
Timber\Timber::render( $templates, $context );

