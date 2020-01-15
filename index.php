<html>
<head>
    <meta charset="utf-8">
    <title> Talks </title>
    <link rel="stylesheet" href="/assets/reveal.js/css/reveal.css">
    <link rel="stylesheet" href="/assets/reveal.js/css/theme/black.css">
    <link rel="stylesheet" href="/assets/styles/custom.css">
</head>
<body>
<div class="reveal">
    <div class="slides">
        <section>
            <h2>talks.grnscrnr.tk</h2>
            <p>The one place to keep all my reveal.js presentations.</p>
        </section>
        <section>
            <section>
                <p>All of the talks</p>
                <p>↓</p>
            </section>
            <?php
            $root=opendir("./");
            while($filename = readdir($root)) {
                if ($filename != "." && $filename != ".." && is_dir($filename) && file_exists($filename . "/" . "index.html")) {
                    printf("<section data-background-iframe='/%s/' data-background-opacity='0.4'> <a href='/%s/' class='open-in-new'><img src='/assets/img/open_in_new-24px.svg' alt=''></a> </section>", $filename, $filename);
                }
            }
            closedir($root);
            ?>
        </section>
        <section>
            That's all.
        </section>
        <section>
            Have fun.
        </section>
        <section>
            Bye.
        </section>
        <section>
            Why are you still here?
        </section>
        <section>
            There's nothing here!
        </section>
        <section>
            Bye!
        </section>
        <section>
            I could stop making these pointless slides huh?
        </section>
        <section>
            🦆
        </section>
    </div>
</div>
<script src="/assets/reveal.js/js/reveal.js"></script>
<script>
    Reveal.initialize({
        controlsTutorial: false,
        controlsLayout: 'edges',
        hash: false,

    });
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementsByTagName('h1')[0].innerHTML = location.hostname
    });
</script>
</body>
</html>