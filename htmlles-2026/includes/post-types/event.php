<?php
/**
* Register the event post type
*
* @see https://developer.wordpress.org/reference/functions/register_post_type/
*         
* @return void
*/
function htmlles_register_event_post_type() {

	$labels = array(
		'name'                  => _x( 'Événements', 'Post Saison General Name', 'htmlles' ),
		'singular_name'         => _x( 'Événement', 'Post Saison Singular Name', 'htmlles' ),
		'menu_name'             => _x( 'Calendrier', 'Back-end', 'htmlles' ),
		'name_admin_bar'        => _x( 'Événement', 'Back-end', 'htmlles' ),
		'archives'              => _x( 'Archives des événements', 'Back-end', 'htmlles' ),
		'attributes'            => _x( 'Attributs du événement', 'Back-end', 'htmlles' ),
		'parent_item_colon'     => _x( 'Événement parent :', 'Back-end', 'htmlles' ),
		'all_items'             => _x( 'Tous les événements', 'Back-end', 'htmlles' ),
		'add_new_item'          => _x( 'Ajouter un nouveau événement', 'Back-end', 'htmlles' ),
		'add_new'               => _x( 'Ajouter', 'Back-end', 'htmlles' ),
		'new_item'              => _x( 'Nouveau Événement', 'Back-end', 'htmlles' ),
		'edit_item'             => _x( 'Modifier cet événement', 'Back-end', 'htmlles' ),
		'update_item'           => _x( 'Mettre à jour cet événement', 'Back-end', 'htmlles' ),
		'view_item'             => _x( 'Voir ce événement', 'Back-end', 'htmlles' ),
		'view_items'            => _x( 'Voir les événements', 'Back-end', 'htmlles' ),
		'search_items'          => _x( 'Chercher un événement', 'Back-end', 'htmlles' ),
		'not_found'             => _x( 'Aucun événement trouvé', 'Back-end', 'htmlles' ),
		'not_found_in_trash'    => _x( 'Aucun événement trouvé dans la corbeille', 'Back-end', 'htmlles' ),
		'insert_into_item'      => _x( 'Insérer dans le événement', 'Back-end', 'htmlles' ),
		'uploaded_to_this_item' => _x( 'Téléversé vers ce événement', 'Back-end', 'htmlles' ),
		'items_list'            => _x( 'Liste des événements', 'Back-end', 'htmlles' ),
		'items_list_navigation' => _x( 'Navigation dans la liste des événements', 'Back-end', 'htmlles' ),
		'filter_items_list'     => _x( 'Filtrer la liste des événements', 'Back-end', 'htmlles' ),
	);
	
   $args = array(
	   'label'                 => __( 'Calendrier', 'htmlles' ),
	   'labels'                => $labels,
	   'supports'              => ['title', 'editor', 'thumbnail', 'revisions', 'page-attributes'],
	   // 'taxonomies'            => [],
	   'hierarchical'          => false,
	   'public'                => true,
	   'show_ui'               => true,
	   'show_in_menu'          => true,
	   'menu_position'         => 23,
	   'menu_icon'             => 'dashicons-calendar-alt',
	   'show_in_admin_bar'     => true,
	   'show_in_nav_menus'     => true,
	   'can_export'            => true,
	   'has_archive'           => true,
	   'exclude_from_search'   => false,
	   'publicly_queryable'    => true,
	   'rewrite' 				=> [
		   'slug' => 'calendrier',
		   'with_front' => false,
	   ],
       'capability_type'       => 'page',

       // ACF: Extended specific quality of life improvements
       'acfe_archive_template' => '',
       'acfe_archive_ppp' => 10,
       'acfe_archive_orderby' => 'date',
       'acfe_archive_order' => 'DESC',
       'acfe_single_template' => '',
       'acfe_admin_archive' => true,
       'acfe_admin_ppp' => 10,
       'acfe_admin_orderby' => 'date',
       'acfe_admin_order' => 'DESC',
   );
   register_post_type( 'event', $args );

}
add_action( 'init', 'htmlles_register_event_post_type', 0 );
