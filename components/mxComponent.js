class mxComponent {

	constructor()
	{
		
	}

	static elements()
	{
		this.headerMenuButton=$('.app_header_menu_icon');
		
	}

	static header()
	{
		this.elements();
		this.sidebar=$('.app_sidebar');
		this.headerMenuButton.click(function(){
			$('.app_sidebar').toggleClass('app_sidebar_hidden');
		});
	}

}