'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Checkbox,
  CheckboxGroup,
  Column,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@carbon/react';
import Image from 'next/image';

// checklist: select / deselect all
// download template in pdf, download template excel (batch action)

export default function LandingPage() {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">Getting started</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">
          Design &amp; build with Carbon
        </h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Page navigation">
            <Tab>About</Tab>
            <Tab>Design</Tab>
            <Tab>Develop</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  <CheckboxGroup
                    className="checklist"
                    legendText="Components in report"
                  >
                    <Checkbox
                      labelText={`Findings by query`}
                      id="checkbox-label-1"
                    />
                    <Checkbox
                      labelText={`Pie chart breakdown by query`}
                      id="checkbox-label-2"
                    />
                    <Checkbox
                      labelText={`Details of every issue`}
                      id="checkbox-label-2"
                    />
                    <Checkbox
                      labelText={`VSCode Links`}
                      id="checkbox-label-2"
                    />
                    <Checkbox
                      labelText={`Summary Statistics`}
                      id="checkbox-label-2"
                    />
                  </CheckboxGroup>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <Image
                    className="landing-page__illo"
                    src="/tab-illo.png"
                    alt="Carbon illustration"
                    width={786}
                    height={647}
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  Rapidly build beautiful and accessible experiences. The Carbon
                  kit contains all resources you need to get started.
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content"
                >
                  Carbon provides styles and components in Vanilla, React,
                  Angular, and Vue for anyone building on the web.
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <Grid>
          <Column md={4} lg={4} sm={4}>
            <h3 className="landing-page__label">The Principles</h3>
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Open
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Modular
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Consistent
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
}
