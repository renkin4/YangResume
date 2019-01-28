$( document ).ready(function()
{
  $("[lang]").each(function ()
  {
      if ($(this).attr("lang") == "en")
          $(this).show();
      else
          $(this).hide();
  });
});

function select_language(language)
{
    $("[lang]").each(function ()
    {
        if ($(this).attr("lang") == language)
            $(this).show();
        else
            $(this).hide();
    });
}
