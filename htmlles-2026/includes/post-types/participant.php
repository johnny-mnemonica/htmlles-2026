<?php
/**
* Register the participant post type
*
* @see https://developer.wordpress.org/reference/functions/register_post_type/
*         
* @return void
*/
function htmlles_register_participant_post_type() {

	$labels = array(
		'name'                  => _x( 'Participant·e·s', 'Post Saison General Name', 'htmlles' ),
		'singular_name'         => _x( 'Participant·e', 'Post Saison Singular Name', 'htmlles' ),
		'menu_name'             => __( 'Participant·e·s', 'htmlles' ),
		'name_admin_bar'        => __( 'Participant·e', 'htmlles' ),
		'archives'              => __( 'Archives des participant·e·s', 'htmlles' ),
		'attributes'            => __( 'Attributs du participant·e', 'htmlles' ),
		'parent_item_colon'     => __( 'Participant·e parent :', 'htmlles' ),
		'all_items'             => __( 'Tous les participant·e·s', 'htmlles' ),
		'add_new_item'          => __( 'Ajouter une nouveau participant·e', 'htmlles' ),
		'add_new'               => __( 'Ajouter', 'htmlles' ),
		'new_item'              => __( 'Nouveu Participant·e', 'htmlles' ),
		'edit_item'             => __( 'Modifier ce participant·e', 'htmlles' ),
		'update_item'           => __( 'Mettre à jour ce participant·e', 'htmlles' ),
		'view_item'             => __( 'Voir ce participant·e', 'htmlles' ),
		'view_items'            => __( 'Voir les participant·e·s', 'htmlles' ),
		'search_items'          => __( 'Chercher un participant·e', 'htmlles' ),
		'not_found'             => __( 'Aucun participant·e trouvé', 'htmlles' ),
		'not_found_in_trash'    => __( 'Aucun participant·e trouvé dans la corbeille', 'htmlles' ),
		'insert_into_item'      => __( 'Insérer dans le participant·e', 'htmlles' ),
		'uploaded_to_this_item' => __( 'Téléversé vers ce participant·e', 'htmlles' ),
		'items_list'            => __( 'Liste des participant·e·s', 'htmlles' ),
		'items_list_navigation' => __( 'Navigation dans la liste des participant·e·s', 'htmlles' ),
		'filter_items_list'     => __( 'Filtrer la liste des participant·e·s', 'htmlles' ),
	);
	
   $args = array(
	   'label'                 => __( 'Participant·e·s', 'htmlles' ),
	   'labels'                => $labels,
	   'supports'              => ['title', 'editor', 'thumbnail', 'revisions', 'page-attributes'],
	   // 'taxonomies'            => [],
	   'hierarchical'          => false,
	   'public'                => true,
	   'show_ui'               => true,
	   'show_in_menu'          => true,
	   'menu_position'         => 23,
	   'menu_icon'             => 'dashicons-groups',
	   'show_in_admin_bar'     => true,
	   'show_in_nav_menus'     => true,
	   'can_export'            => true,
	   'has_archive'           => true,
	   'exclude_from_search'   => false,
	   'publicly_queryable'    => true,
	   'rewrite' 				=> [
		   'slug' => 'participant-e-s',
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
   register_post_type( 'participant', $args );

}
add_action( 'init', 'htmlles_register_participant_post_type', 0 );
