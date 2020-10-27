<template>
    <div class="toggle-faq">
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-6 class="faq-title">Completely Responsive</b-button>
            </b-card-header>
            <b-collapse id="accordion-6" visible >
                <b-card-body>
                    <b-card-text>
                        AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-bb class="faq-title">Free Lifetime Updates</b-button>
            </b-card-header>
            <b-collapse id="accordion-bb" >
                <b-card-body>
                    <b-card-text>
                        AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-cc class="faq-title">Excellent Custom Support</b-button>
            </b-card-header>
            <b-collapse id="accordion-cc" >
                <b-card-body>
                    <b-card-text>
                        AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-dd class="faq-title">On-demand Extra Services</b-button>
            </b-card-header>
            <b-collapse id="accordion-dd" >
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
        name: 'AccordionToggle'
    };
</script>