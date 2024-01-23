goog.provide('portfolio.ui.document');
portfolio.ui.document.docs = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("document","up-and-running","document/up-and-running",854215557),portfolio.ui.docs.prepare_doc("# Welcome to Portfolio!\n\nPortfolio is running and ready to help you build UI components. To see your\ncomponents, you will need to create examples with [`defscene`](./defscene.md)\nand make sure the examples are required in the namespace where you called\n[`portfolio.ui/start!`](./ui-start.md).\n\n```clj\n(require '[portfolio.react-18 :refer-macros [defscene]])\n\n(defscene my-first-scene\n  [:h1 \"Hello world!\"])\n\n(defscene my-second-scene\n  :params {:text \"Hello world\"}\n  [params]\n  (MyComponent params))\n```\n\nDepending on your component library of choice you may need to require a\ndifferent namespace, see [`defscene` docs](./defscene.md).\n\n## Next steps\n\n- [Load custom CSS](./custom-css.md)\n- [Customize the Portfolio UI](./customize-ui.md)\n- [Using defscene](./defscene.md)\n\n## Help and feedback\n\nIf you run into any issues, get stuck, or have any feedback at all, don't\nhesitate to get in touch. Feel free to open issues on the [github\nrepo](https://github.com/cjohansen/portfolio/issues), or join us in [#portfolio\non the Clojurians Slack](https://clojurians.slack.com).\n\n[All documentation](./index.md)\n"),new cljs.core.Keyword("document","defscene","document/defscene",2073243834),portfolio.ui.docs.prepare_doc("# The `defscene` macro\n\n`defscene` defines a scene in which Portfolio will showcase a component in a\nspecific state. Whether that \"component\" is a single element, like a button, or\nan entire page layout -- is completely up to you.\n\nAt its most minimal, a scene is just a named instance of a component:\n\n```clj\n(defscene button\n  [:button.button \"I am a button\"])\n```\n\n## Rendering library adapters\n\nWhere you require `defscene` from depends on your rendering library of choice.\nIf you're using [reagent](https://github.com/reagent-project/reagent), you'll\n`(:require [portfolio.reagent :refer-macros [defscene]])`.\n\nCurrently these adapters are supported:\n\n- [Reagent](https://github.com/reagent-project/reagent)\n  - Older versions of React - `portfolio.reagent`\n  - React versions 18+ - `portfolio.reagent-18`\n- [Rum](https://github.com/tonsky/rum)\n  - Older versions of React - `portfolio.rum`\n  - React versions 18+ - `portfolio.react-18`\n- [Dumdom](https://github.com/cjohansen/dumdom) - `portfolio.dumdom`\n- React (including [Helix](https://github.com/lilactown/helix), [UIx<sup>2</sup>](https://github.com/pitch-io/uix))\n  - Older versions of React - `portfolio.react`\n  - React versions 18+ - `portfolio.react-18`\n- DOM API - `portfolio.dom`\n- HTML strings - `portfolio.html`\n\nAll these namespaces have a `defscene` macro that works the same way. Note that\nPortfolio does not depend on any of these, so if you're using\n`portfolio.reagent`, you must explicitly pull in `reagent` yourself.\n\n## API docs\n\n`defscene` takes a symbol name and a component as its minimum input, but it can\nalso take additional key/value pairs, and an optional docstring:\n\n```clj\n(defscene name\n  ;; Optional docstring\n  ;; key/value pairs\n  component)\n```\n\nDocstrings can contain Markdown:\n\n```clj\n(defscene empty-input\n  \"The `LabeledInput` component is a responsive form control\"\n  (LabeledInput {:label \"Your name\"}))\n```\n\nScenes can take arguments and have function bodies:\n\n```clj\n(defscene name\n  ;; key/value pairs\n  :params {:title \"Your component data here\"}\n  [params portfolio-opts]\n  (render-component params))\n```\n\nScenes can also use existing functions to render:\n\n```clj\n(defn render-button [data]\n  [:button.button (:text data)])\n\n(defscene reusable-fn\n  :params {:text \"Click the button!\"}\n  render-button)\n```\n\nBy using `:params` and either a function body or an existing function, you allow\nPortfolio to know about the scene's component data. This enables you to use\n`tap>` and Portfolio's UI to interact with your component, or bind the scene to\nan atom for stateful scenes. It also enables you to inspect portfolio's layout\noptions (background, viewport size, etc) to render the component.\n\n## Stateful scenes\n\nIf you pass an atom to a scene, the scene will re-render on every change of the\natom. There's no magic involved, just pass an atom to `:params`:\n\n```clj\n(defscene name\n  :params (atom {:title \"Hello world!\"})\n  [store portfolio-opts]\n  [:h1 (:title @store)])\n```\n\nIf you pass an atom as `:params`, an atom is what is passed to your component\nfunction. Scenes have mount and unmount hooks that can be useful with atom\nparams:\n\n```clj\n(defn shuffle-titles [store titles]\n  (swap! store :idx 0)\n  (js/setInterval\n   (fn []\n     (swap! store\n      (fn [state]\n        (let [idx (mod (inc (:idx state)) (count titles))]\n          (assoc state\n                 :title (nth titles idx)\n                 :idx idx)))))\n   2000))\n\n(defscene name\n  :params (atom {})\n  :on-mount (fn [store]\n              (let [titles [\"I am the first title\"\n                            \"It is time for the second title\"]]\n                (swap! store :timer (shuffle-titles store titles))))\n  :on-unmount (fn [store]\n                (js/clearInterval (:timer @store)))\n  [store]\n  [:h1 (:title @store)])\n```\n\n## Parameterized static scenes\n\nEven scenes that just need a map can benefit from the indirection provided by\n`:params`, because it allows you to access the component data separately. The\nuses for this are countless, some suggestions include:\n\n- Using Portfolio's UI to tinker with the parameter\n- Power a search that finds scenes based on data\n\n```clj\n(defscene name\n  :params {:title \"Hello world!\"}\n  [params portfolio-opts]\n  [:h1 (:title param)])\n```\n\nPortfolio can subscribe to multiple atoms in `:params`. If you set `:params` to\na map or a vector, Portfolio find all contained atoms and re-render the scene\nwhen any of them change.\n\n## Scene names\n\nPortfolio will \"humanize\" the scene symbol id for a title. If you don't like the\nresult, you can set `:title` to override the UI title:\n\n```clj\n(defscene default-scenario\n  :title \"'tis the default scenario!\"\n  :params {:title \"Hello world!\"}\n  [params portfolio-opts]\n  [:h1 (:title param)])\n```\n\nWith `:title`, this will list as `'tis the default scenario!` in the sidebar\ninstead of `Default scenario`.\n\n## Reference\n\nCurrently supported key/value pairs:\n\n- `:title` - Give the scene a nice string name\n- `:params` - The initial parameter passed to the component function - also\n  aliased as `:param`\n- `:on-mount` - A function called when the scene is initially mounted. The\n  function is passed the component arguments.\n- `:on-unmount` - A function called when the scene is removed from the DOM. The\n  function is passed the component arguments.\n- `:collection` - What collection the scene belongs to. See [Organizing scenes](./organization.md).\n- `:icon` - An icon to display instead of the default bookmark ([about icons](./organization.md#icons)).\n- `:selected-icon` - Specific icon to display when the scene is selected.\n- `:icon-color` - The color of the scene icon.\n- `:selected-icon-color` - Specific icon color for when the scene is selected.\n\n[All documentation](./index.md)\n"),new cljs.core.Keyword("document","organization","document/organization",1948929732),portfolio.ui.docs.prepare_doc("# Organizing scenes\n\nPortfolio tries to automatically organize your scenes into \"packages\"\n(typically: all scenes for a specific component) and \"folders\" (e.g., a\ncollection of related scenes, e.g. \"Components\", \"Layouts\", etc). It uses the\nnamespaces of your scenes to do this, and attempts to humanize the resulting\nnames. You can easily provide custom names, icons, colors and sort orders for\nscenes, packages and folders - or you can completely customize your scene\norganization if your want.\n\n## Customizing packages / namespaces\n\nThe default \"packages\" correspond to the namespaces where your scenes are\ndefined. If you drop a bunch of `defscene`s into `ui.components.button-scenes`,\nthen `ui.components.button-scenes` will be used as a \"package\", and its name\nwill be `\"Button scenes\"`. If you don't like this, call\n`portfolio.<adapter>/configure-scenes` from the same namespace:\n\n```clj\n(ns ui.components.button-scenes\n  (:require '[portfolio.reagent :as portfolio]))\n\n(portfolio/configure-scenes\n  {:title \"Button\"})\n```\n\nWhat keys can you stick in this map? Well, the following (more on icons\n[below](#icons)):\n\n- `:title` - The title of the collection.\n- `:idx` - The sorting index.\n- `:icon` - An icon to display instead of the default 3D box\n- `:expanded-icon` - An icon to display when the package is expanded (overrides\n  `:icon`, if both are set)\n- `:collapsed-icon` - An icon to display when the package is collapsed (overrides\n  `:icon`, if both are set)\n- `:icon-color` - The icon color.\n- `:expanded-icon-color` - A more specific color for expanded packages.\n- `:collapsed-icon-color` - A more specific color for collapsed packages.\n- `:kind` - One of `:folder` or `:package`. Dictates the rendering style.\n  Namespaces with scenes default to `:package`.\n- `:default-folder-icon` - The default icon to use for folders nested under this\n  collection.\n- `:default-folder-expanded-icon` - The default icon to use for expanded folders\n  nested under this collection. Overrides `:default-folder-icon` when set, and\n  can be overridden on specific folders.\n- `:default-folder-collapsed-icon` - The default icon to use for collapsed folders\n  nested under this collection. Overrides `:default-folder-icon` when set, and\n  can be overridden on specific folders.\n- `:default-package-icon` - The default icon to use for packages nested under this\n  collection.\n- `:default-package-expanded-icon` - The default icon to use for expanded packages\n  nested under this collection. Overrides `:default-package-icon` when set, and\n  can be overridden on specific packages.\n- `:default-package-collapsed-icon` - The default icon to use for collapsed packages\n  nested under this collection. Overrides `:default-package-icon` when set, and\n  can be overridden on specific packages.\n\n<a id=\"icons\"></a>\n## Scene and collection icons\n\nYou might be wondering - \"what's an icon, anyway?\". Good question. An icon is\neither hiccup, an SVG element, or a reference to an icon in\n[`phosphor-clj`](https://github.com/cjohansen/phosphor-clj). You can browse\nicons on the [Phosphor icons website](https://phosphoricons.com/).\n\nTo refer Phosphor icons:\n\n```clj\n(require '[phosphor.icons :as icons]\n         '[portfolio.reagent :as portfolio])\n\n(portfolio/configure-collections\n  {:title \"My UI Components\"\n   :icon (icons/icon :phosphor.regular/hamburger)})\n```\n\n## Customizing folders\n\nFolders are collections like packages. If you have scenes in\n`ui.components.button-scenes`, Portfolio creates a \"package\" for\n`ui.components.button-scenes`, and a \"folder\" for `ui.components`. If you\nalready have a `ui.components` namespace in your project, you can call\n`portfolio/configure-scenes` as above to customize it. If you don't, you can\nsomewhat more manually configure the collection in any namespace of your liking\n(e.g. the one where you start the Portfolio UI):\n\n```clj\n(require '[portfolio.data :as data])\n\n(data/register-collection!\n  :ui.components\n  {:title \"My loverly components\"})\n```\n\n## Custom organization\n\nIf you don't like the default organization Portfolio sets up, you can create\nyour own arbitrarily nested organization using the two kinds of renderings\navailable (\"folder\" and \"package\"). These are both collections, but they render\ndifferently.\n\nTo dictate what collection a scene belongs to, set the `:collection` keyword:\n\n```clj\n(defscene poor-legibility\n  :collection :ui-malpractice\n  [:div {:style {:background \"#000\" :color \"#333\"}}\n    \"Please don't use insufficient contrast\"])\n```\n\nYou can then define the collection using `portfolio.data/register-collection!`:\n\n```clj\n(require '[portfolio.data :as data])\n\n(data/register-collection!\n  :ui-malpractice\n  {:title \"UI Malpractice: Don'ts\"\n   :kind :folder})\n```\n\nIt does not matter if you define the scene or the collection first, Portfolio\nwill connect the pieces. If you refer to a `:collection` that doesn't exist,\nPortfolio will default the necessary pieces of information.\n\nCollections can nest, just add `:collection` to a collection to indicate that it\nbelongs to another collection:\n\n```clj\n(require '[portfolio.data :as data])\n\n(data/register-collection!\n  :ui-malpractice\n  {:title \"UI Malpractice: Don'ts\"\n   :collection :process-samples\n   :kind :package})\n\n(data/register-collection!\n  :process-samples\n  {:title \"Process samples\"\n   :collection :ui-kit\n   :kind :folder})\n\n(data/register-collection!\n  :ui-kit\n  {:title \"UI Kit\"\n   :kind :folder})\n```\n\nThis will render nested folders:\n\n<img src=\"./nested-folders.png\" style=\"max-width: 400px\" alt=\"Nested folders\">\n\n[All documentation](./index.md)\n"),new cljs.core.Keyword("document","custom-css","document/custom-css",1268716472),portfolio.ui.docs.prepare_doc("# Custom CSS\n\nYour scenes render inside an iframe in a blank HTML page called the canvas. This\npage has no default styling, and comes as bare as possible out of the package.\nYou might want to add some CSS files to the canvas, which can be done with\n`portfolio.ui/start!`:\n\n```clj\n(require '[portfolio.ui :as ui])\n\n(ui/start!\n  {:config {:css-paths [\"/myapp/custom.css\"]}})\n```\n\nAdd as many CSS files as you like. CSS files will automatically reload when\nchanged by your build process (tested and verified with shadow-cljs and\nfigwheel-main).\n\n## More customization\n\n- [Customize canvas HTML](./custom-html.md)\n- [Customize the Portfolio UI](./customize-ui.md)\n- [All documentation](./index.md)\n"),new cljs.core.Keyword("document","custom-html","document/custom-html",-430829574),portfolio.ui.docs.prepare_doc("# Custom HTML\n\nYour scenes render inside an iframe in a blank HTML page called the canvas. This\npage has no default styling, and comes as bare as possible out of the package.\nIf you need to make more adjustments to the canvas, such as adding meta tags,\nglobal JavaScripts etc, you can provide your own canvas:\n\n```clj\n(require '[portfolio.ui :as ui])\n\n(ui/start!\n  {:config {:canvas-path \"/my/custom/portfolio.html\"}})\n```\n\nThere are no requirements for how you format this file. Portfolio will add a div\nwith id `\"canvas\"` to it, in which it will render the scene. If there already is\nan element with that id, it will be used instead.\n\n## More customization\n\n- [Customize CSS](./custom-css.md)\n- [Customize the Portfolio UI](./customize-ui.md)\n- [All documentation](./index.md)\n"),new cljs.core.Keyword("document","customize-ui","document/customize-ui",729060314),portfolio.ui.docs.prepare_doc("# Customizing the Portfolio UI\n\nThe Portfolio UI is highly customizable: The default canvas tools are all\noptional, and their options can be configured to your liking. While not yet\nfinalized there are also APIs for you to create custom tools - locale selection,\ntheme selectors, and whatever else your imagination can conjure. Documentation\nwill be available when these APIs are considered stable.\n\n## Background\n\nThe background tool sets a background color for your scene, and adds a class\nname to the `body` element, to help your CSS choose between dark mode and light\nmode. See\n[`portfolio.ui.canvas.background`](../../src/portfolio/ui/canvas/background.cljs)\nfor specifics about the default options. To default Portfolio to use dark mode\nfor scenes, specify `:background/default-option-id` when calling `ui/start!`:\n\n```clj\n(require '[portfolio.ui :as ui])\n\n(ui/start!\n  {:config {:background/default-option-id :dark-mode}})\n```\n\nTo change the available options, use `:background/options`:\n\n```clj\n(require '[portfolio.ui :as ui])\n\n(ui/start!\n {:config\n  {:background/options\n   [{:id :bright-mode\n     :title \"Bright mode (.bright-mode)\"\n     :value {:background/background-color \"#f8f8f8\"\n             :background/document-class \"light-mode\"}}\n    {:id :bleak-mode\n     :title \"Bleak mode (.bleak-mode)\"\n     :value {:background/background-color \"#000000\"\n             :background/document-class \"dark-mode\"}}]\n\n   :background/default-option-id :bleak-mode}})\n```\n\n## Viewport\n\nThe viewport tool sets the dimensions of the viewport your scenes are rendered\nin, and help with responsive design. The default options are auto and an\niPhone-like size. You can provide your own options if you want:\n\n```clj\n(require '[portfolio.ui :as ui])\n\n(ui/start!\n {:config\n  {:viewport/options\n   [{:title \"Auto\"\n     :value {:viewport/width \"100%\"\n             :viewport/height \"100%\"}}\n    {:title \"iPhone 12 / 13 Pro\"\n     :value {:viewport/width 390\n             :viewport/height 844}}]}})\n```\n\nOptions can use specific pixel dimensions, percentages, or a mix. You can have\nas many resolutions as you need. You can optionally control scene offset from\nthe viewport by adding `:viewport/padding` to either a number, or a vector with\nfour numbers (padding north, east, south, west).\n\nIf you just want to display all scenes in a default viewport, and don't care for\nthe viewport button in the toolbar, you can configure it like so:\n\n```clj\n(require '[portfolio.ui :as ui])\n\n(ui/start!\n {:config\n  {:viewport/options []\n   :viewport/defaults\n   {:viewport/padding [0 0 0 0]\n    :viewport/width 390\n    :viewport/height 844}}})\n```\n\nYou can of course also combine viewport options with a default viewport.\n\n## Grid\n\nThe grid tool displays a grid in the background of your scenes. The default is\neither no grid, or a 5 by 20 pixel grid. Change this as you see fit:\n\n```clj\n(require '[portfolio.ui :as ui])\n\n(ui/start!\n {:config\n  {:grid/options\n   [{:title \"5 x 20px\"\n     :value {:grid/offset 0\n             :grid/size 20\n             :grid/group-size 5}}\n    {:title \"No grid\"\n     :value {:grid/size 0}}]}})\n```\n\n## Docs\n\nThe docs tool toggle documentation on and off globally. It will toggled on by\ndefault.\n\n## Code\n\nThe code tool toggles on and off scene code - e.g. the code in the `defscene`\nbody. This only works with inline components and the arguments/body form. If\nyour scene is created with just a reference to a function, Portfolio can't\nautomatically display its implementation.\n\n## Split windows\n\nThe window splitting tool allows you to run multiple panes at once. This allows\nyou to view multiple versions of a scene simultaneously.\n\n## Compare tool\n\nThe compare tool allows you to select different scenes in split panes. This way\nyou can not only compare different versions of the same scene, but also\ndifferent scenes.\n\n## Portfolio documentation\n\nThe Portfolio documentation will be available via a button in the sidebar when\nPortfolio is served from localhost or directly via an IP address. You can\ncontrol the button's appearance manually. The following example disables it\ncompletely:\n\n```clj\n(require '[portfolio.ui :as ui])\n\n(ui/start!\n  {:config {:portfolio-docs? false}})\n```\n\n## More customization\n\n- [Customize CSS](./custom-css.md)\n- [Customize canvas HTML](./custom-html.md)\n- [All documentation](./index.md)\n"),new cljs.core.Keyword("document","index","document/index",285814530),portfolio.ui.docs.prepare_doc("# Portfolio documentation\n\n- [Custom CSS](./custom-css.md)\n- [Custom HTML](./custom-html.md)\n- [Customize the Portfolio UI](./customize-ui.md)\n- [Using defscene](./defscene.md)\n- [Organizing scenes](./organization.md)\n\n## Help and feedback\n\nIf you run into any issues, get stuck, or have any feedback at all, don't\nhesitate to get in touch. Feel free to open issues on the [github\nrepo](https://github.com/cjohansen/portfolio/issues), or join us in [#portfolio\non the Clojurians Slack](https://clojurians.slack.com).\n")], null);
portfolio.ui.document.get_document = (function portfolio$ui$document$get_document(id){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(portfolio.ui.document.docs,id);
if(cljs.core.truth_(temp__5804__auto__)){
var doc = temp__5804__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(doc,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return null;
}
});
portfolio.ui.document.prepare_view = (function portfolio$ui$document$prepare_view(state,location,document){
if(cljs.core.truth_(document)){
return cljs.core.with_meta(document,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.view","render-view","portfolio.ui.view/render-view",657855785,null),new cljs.core.Var(function(){return portfolio.ui.components.document.Document;},new cljs.core.Symbol("portfolio.ui.components.document","Document","portfolio.ui.components.document/Document",-1209079996,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.document","portfolio.ui.components.document",-1617836272,null),new cljs.core.Symbol(null,"Document","Document",210564421,null),"portfolio/ui/components/document.cljs",25,1,5,5,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.ui.components.document.Document)?portfolio.ui.components.document.Document.cljs$lang$test:null)]))], null));
} else {
return null;
}
});

//# sourceMappingURL=portfolio.ui.document.js.map