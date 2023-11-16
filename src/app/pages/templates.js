'use client';
import TemplateChecklist from '././components/Template/Template.js';

function TemplatePage() {
  return (
    <Grid className="template-page">
      <Column lg={16} md={8} sm={4} className="template-checklist">
        <TemplateChecklist />
      </Column>
    </Grid>
  );
}

export default TemplatePage;
