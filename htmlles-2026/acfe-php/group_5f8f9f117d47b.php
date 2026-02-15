<?php 

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_5f8f9f117d47b',
	'title' => 'Détails du participant·e',
	'fields' => array(
		array(
			'key' => 'field_5f8f9f3cb4bc0',
			'label' => 'Effet du texte',
			'name' => 'text_effect',
			'aria-label' => '',
			'type' => 'radio',
			'instructions' => '',
			'required' => 1,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'choices' => array(
				'fill' => 'Remplis',
				'stroke' => 'Détouré',
			),
			'allow_null' => 0,
			'other_choice' => 0,
			'default_value' => 'fill',
			'layout' => 'horizontal',
			'return_format' => 'value',
			'save_other_choice' => 0,
		),
		array(
			'key' => 'field_5f8f9fd4b4bc1',
			'label' => 'Événements',
			'name' => 'events',
			'aria-label' => '',
			'type' => 'relationship',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'post_type' => array(
				0 => 'event',
			),
			'taxonomy' => '',
			'filters' => array(
				0 => 'search',
			),
			'elements' => array(
				0 => 'featured_image',
			),
			'min' => '',
			'max' => '',
			'return_format' => 'object',
			'acfe_bidirectional' => array(
				'acfe_bidirectional_enabled' => true,
				'acfe_bidirectional_related' => array(
					0 => 'field_5f905b96610fb',
				),
			),
			'bidirectional_target' => array(
			),
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'participant',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'left',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_rest' => false,
	'acfe_display_title' => '',
	'acfe_autosync' => array(
		0 => 'php',
	),
	'acfe_permissions' => '',
	'acfe_form' => 0,
	'acfe_meta' => '',
	'acfe_note' => '',
	'modified' => 1713669568,
	'acfml_field_group_mode' => 'advanced',
));

endif;