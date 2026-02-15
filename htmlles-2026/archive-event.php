<?php
global $wp_query;

function debug_to_console($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}

$context = Timber::context();

$query = $GLOBALS['wp_query']->query_vars;
$query['posts_per_page'] = 100;

$context['posts'] = Timber::get_posts($query);

foreach ($context['posts'] as $post) {
    $date_unix = strtotime(get_field('start_date', $post->ID, false));
    $time = get_field('start_time', $post->ID, false);
    $date_formatted = date_i18n('Y-m-d', $date_unix); // Format date as 'YYYY-MM-DD'

    $context['days'][$date_formatted]['date'] = [
        'full_date' => $date_formatted,
        'time' => $time
    ];

    $location = get_field('location', $post->ID, false);
    $parts = explode(' - ', $location);
    $location_formatted = $parts[0];

    $context['days'][$date_formatted]['posts'][] = [
        'post' => $post,
        'location' => $location_formatted
    ];
}

// Sort the days array by date, oldest first
uksort($context['days'], function ($a, $b) {
    return strtotime($a) - strtotime($b); // Sort by ascending date
});

// Sort posts within each day by start time
foreach ($context['days'] as &$day) {
    usort($day['posts'], function ($a, $b) {
        $start_time_a = strtotime($a['post']->start_time);
        $start_time_b = strtotime($b['post']->start_time);
        return $start_time_a <=> $start_time_b;
    });
}

unset($day); // unset the reference after the loop

$context['archive'] = get_fields($wp_query->get('post_type') . '_archive');
$context['post'] = $context['archive'];

// List Templates
$templates = ["{$wp_query->get('post_type')}-archive.twig", "archive.twig", "index.twig"];

// Render Template
Timber::render($templates, $context);


