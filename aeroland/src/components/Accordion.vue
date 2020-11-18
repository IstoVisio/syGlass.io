<template>
    <div class="accordion-faq wow move-up">
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-1 class="faq-title">Completely Responsive</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        syGlass is professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-2 class="faq-title">Free Lifetime Updates</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-3 class="faq-title">Excellent Custom Support</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-4 class="faq-title">On-demand Extra Services</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'Accordion',
    };
</script>